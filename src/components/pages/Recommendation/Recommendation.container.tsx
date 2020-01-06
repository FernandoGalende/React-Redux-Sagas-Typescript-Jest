import { connect } from 'react-redux';

import { Recommendation } from './Recommendation.component';
import * as selector from '../../../state/Auth/selectors';
import { AppState } from '../../../state/Auth/types';

const mapStateToProps = (state: AppState) => ({
	userRecomendation: selector.getRecommendations(state)
});

const mapDispatchToProps = (dispatch: Function) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Recommendation);
