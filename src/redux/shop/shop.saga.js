//Reducers fire first, then sagas receive the action. From there, sagas can fire off new actions which in turn hit the reducers and other sagas as well!


//listens to evry action of the specific type
import {takeEvery} from 'redux-saga/effects';

