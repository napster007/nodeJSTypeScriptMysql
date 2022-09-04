import {Request, Response} from 'express';

//connect to Dastabse
import {connect} from '../database';
import {Post} from '../interface/Post';

export async function getPosts(req: Request, res: Response): Promise<Response>{
    const conn = await connect();
    const posts = await conn.query('SELECT * FROM posts');
    return res.json(posts[0]);
}

export async function createPost(req:Request, res: Response){
    const conn = await connect();
    const newPost: Post = req.body;
    await conn.query('INSERT INTO posts SET ?', [newPost]);
    return res.json({
        message : 'POST Created'
    });
}

export async function getPost(req: Request, res: Response): Promise<Response>{
    
    const id = req.params.postId;
    const conn = await connect();
    const post = await conn.query('SELECT * FROM posts WHERE id=?',[id]);
    return res.json(post[0]);
}