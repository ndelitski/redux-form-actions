import * as ReduxForm from 'redux-form-draftjs';
import wrapper from './wrapper';
import { reduxFormMiddleware } from './middlewares';

module.exports = {
  ...ReduxForm,
  reduxForm: wrapper(ReduxForm.reduxForm),
  reduxFormMiddleware,
};
