import {Router} from 'express';
const router = Router();

import {getPosts, createPost, getPost} from '../controller/post.controller';

router.route('/')
    .get(getPosts)
    .post(createPost);
router.route('/:postId')
    .get(getPost);




export default router;