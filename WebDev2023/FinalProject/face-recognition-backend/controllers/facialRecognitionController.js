const { ClarifaiStub, grpc } = require('clarifai-nodejs-grpc');
const dbUtils = require("../utils/database-utils");

// stub for clarifai
const stub = ClarifaiStub.grpc();
const metadata = new grpc.Metadata();
metadata.set('authorization', `Key ${process.env.CLARIFAI_API_KEY}`);

const getFaceBoundBox = (id, email, url, res) => {
  const clarifaiOpts = {
    model_id: 'face-detection',
    inputs: [{ data: { image: { url } } }],
  };
  return stub.postModelOutputs(
    clarifaiOpts,
    metadata,
    (err, response) => {
      if (err) {
        return res.status(501).json({
          error: err.code,
          message: err.message
        })
      }

      if (response.status.code !== 10000) {
        return res.status(502).json(response)
      }

      dbUtils.incrementEntries(id, email)
        .then(resp => {
          return res.status(200).json({ api: response, user: resp.user });
        }).catch(err => {
          return res.status(503).json(err);
      })
    }
  );
};

module.exports = {
  getFaceBoundBox,
};
