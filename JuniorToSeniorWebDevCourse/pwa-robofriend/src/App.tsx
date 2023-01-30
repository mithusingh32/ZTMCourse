import './App.css';
import 'tachyons';
import RobotView from './views/robot.view';
import CardList from './components/card-list.component';
import SearchBox from './components/search-box.component';
import { useEffect } from 'react';
import LoadingSpinner from './components/loading-spinner.component';
import Scroll from './components/scroll.component';
import ErrorBoundary from './components/errorboundry.component';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './store/dataSlice';
import { AppDispatch, RootState } from './store/store';

function App() {
  const { data, status } = useSelector((state: RootState) => state.data);
  const dispatch = useDispatch<AppDispatch>();

  // Run loadRobotData once on render.
  // In class based components useEffect was a life cycle method
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const LoadingOrError = () => {
    if (status === 'loading') {
      return (
        <>
          <LoadingSpinner />
          <h1 className="f5 white">Loading Data...</h1>
        </>
      );
    } else {
      return <h1 className="f5 white">Error Loading Data...</h1>;
    }
  };

  return (
    <RobotView className={'tc'}>
      <h1 className="f1">RoboFriends</h1>
      {/*We can pass function to components. We can pass in the set state function
                to the searchbox component that will then update the state in the App*/}
      <SearchBox />
      <hr />
      {/*If we have no data show spinner*/}
      {status === 'loaded' && data.length > 0 ? (
        <ErrorBoundary>
          <Scroll>
            <CardList />
          </Scroll>
        </ErrorBoundary>
      ) : (
        <LoadingOrError />
      )}
    </RobotView>
  );
}

export default App;
