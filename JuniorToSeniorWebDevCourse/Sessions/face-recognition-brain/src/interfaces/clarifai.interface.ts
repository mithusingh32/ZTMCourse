export interface ClarifaiResponse {
  status: RawDataStatus;
  outputs: Output[];
  rawData: RawData;
}

export interface Output {
  id: string;
  status: ModelVersionStatus;
  created_at: Date;
  model: Model;
  input: Input;
  data: OutputData;
}

export interface OutputData {
  regions: Region[];
}

export interface Region {
  id: string;
  region_info: RegionInfo;
  data: RegionData;
  value: number;
}

export interface RegionData {
  concepts: Concept[];
}

export interface Concept {
  id: string;
  name: string;
  value: number;
  app_id: string;
}

export interface RegionInfo {
  bounding_box: BoundingBox;
}

export interface BoundingBox {
  top_row: number;
  left_col: number;
  bottom_row: number;
  right_col: number;
}

export interface Input {
  id: string;
  data: InputData;
}

export interface InputData {
  image: Image;
}

export interface Image {
  url: string;
}

export interface Model {
  id: string;
  name: string;
  created_at: Date;
  modified_at: Date;
  app_id: string;
  output_info: OutputInfo;
  model_version: ModelVersion;
  display_name: string;
  user_id: string;
  input_info: ImportInfo;
  train_info: ImportInfo;
  model_type_id: string;
  visibility: Visibility;
  metadata: null;
  presets: null;
  languages: any[];
  import_info: ImportInfo;
  workflow_recommended: boolean;
}

export interface ImportInfo {}

export interface ModelVersion {
  id: string;
  created_at: Date;
  status: ModelVersionStatus;
  visibility: Visibility;
  app_id: string;
  user_id: string;
  metadata: ImportInfo;
  output_info: OutputInfo;
  input_info: ImportInfo;
  train_info: ImportInfo;
  import_info: ImportInfo;
}

export interface OutputInfo {
  output_config: OutputConfig;
  message: string;
}

export interface OutputConfig {
  concepts_mutually_exclusive: boolean;
  closed_environment: boolean;
  max_concepts: number;
  min_value: number;
}

export interface ModelVersionStatus {
  code: number;
  description: string;
}

export interface Visibility {
  gettable: number;
}

export interface RawData {
  status: RawDataStatus;
  outputs: Output[];
}

export interface RawDataStatus {
  code: number;
  description: string;
  req_id: string;
}

export interface Box {
  leftCol: number;
  topRow: number;
  rightCol: number;
  bottomRow: number;
}
