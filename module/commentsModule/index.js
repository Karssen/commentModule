/**
 * Created by Artem on 13.04.2016.
 */
'use strict';

class CommentModule{
    constructor(options){
        this.elem = options.elem;
        this.commentTemplate = options.commentTemplate;
        this.formTemplate = options.formTemplate;
        this.counter = new makeCounter();
        this.elem.addEventListener('click', this._onClick.bind(this));
        this.elem.addEventListener('commentCreated', this._onCommentCreated.bind(this));
    }

    _onClick(event){
        let target = event.target;
        let answer = target.closest('[data-role=answer]');
        let post = target.closest('.media');
        if(!answer) return;

        let newComment = new Answer({
            currentPost : post,
            parent : this.elem,
            commentTemplate: this.commentTemplate,
            formTemplate : this.formTemplate
        });
        newComment.createComment();
    }
    _onCommentCreate(event){
        let header = document.querySelector('.comments-number');
        header.innerHTML = this.counter.count();
    }

}