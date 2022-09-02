import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUserPosts } from '../../store/reducers/postsSlice';

const UserPosts = () => {
	const params = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchUserPosts(params.id));
	}, []);

	const posts = useSelector((state) => state.posts.posts);

	return (
		<>
			<button
				className='button'
				onClick={() => navigate(-1, { replace: true })}
			>
				Back
			</button>
			<h3>Posts: </h3>
			<div>
				{posts.map((post, index) => (
					<div key={post.id}>
						<h4>
							{index + 1}. {post.title}
						</h4>
						<div>{post.body}</div>
					</div>
				))}
			</div>
		</>
	);
};

export default UserPosts;
