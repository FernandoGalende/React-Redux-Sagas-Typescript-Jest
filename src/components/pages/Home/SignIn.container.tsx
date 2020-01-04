import { connect } from 'react-redux';

import SignIn from './SignIn.component';
import { setUser} from '../../../state/Auth/actionCreators'

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: any) => ({
    setUser: (user:any) => dispatch(setUser(user)),
});

export default (connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignIn));