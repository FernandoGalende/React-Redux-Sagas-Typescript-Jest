import { connect } from 'react-redux';
import SignIn from './SignIn.component';
import { getRecommendation } from '../../../state/Auth/actionCreators';
import { AppState, User } from '../../../state/Auth/types';

const mapStateToProps = (state: AppState) => ({});

const mapDispatchToProps = (dispatch: Function) => ({
	getRecomentation: (user: User) => dispatch(getRecommendation(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
