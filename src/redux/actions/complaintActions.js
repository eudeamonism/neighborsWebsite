import axios from 'axios';

import { setLoading,  setError, closeLoading } from '../slices/complaint';

export const createProductReview = (productId, userId, comment, rating, title) => async (dispatch, getState) => {
	dispatch(setLoading());
	const {
		user: { userInfo },
	} = getState();

	try {
		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
				'Content-Type': 'application/json',
			},
		};

		const { data } = await axios.post(`/api/products/reviews/${productId}`, { comment, userId, rating, title }, config);
		localStorage.setItem('userInfo', JSON.stringify(data));
		dispatch(productReviewed());
	} catch (error) {
		dispatch(
			setError(
				error.response && error.response.data.message
					? error.response.data.message
					: error.message
					? error.message
					: 'An unexpected error has occured. Please try again later.'
			)
		);
	}
};