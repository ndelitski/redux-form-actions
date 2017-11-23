import * as ReduxForm from 'redux-form-draftjs/immutable';
import wrapper from './wrapper';
import { reduxFormMiddleware } from './middlewares';

module.exports = {
  ...ReduxForm,
  reduxForm: wrapper(ReduxForm.reduxForm),
  reduxFormMiddleware,
};
