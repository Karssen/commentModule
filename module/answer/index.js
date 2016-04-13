/**
 * Created by Artem on 13.04.2016.
 */
'use strict';

    class Answer{
        constructor(options){
            this.post = options.currentPost;
            this.parent = options.parent;
            this.commentTemplateFunction = _.template(options.commentTemplate);
            this.FormTemplateFunction = _.template(options.formTemplate);
        }

        createComment(){
            this._createForm();
        }

        _createForm(){
            let formHtml = this.FormTemplateFunction();
            this.parent.insertAdjacentHTML('beforeEnd', formHtml);
            let form = document.getElementById('comment-form');
            let button = document.getElementById('make-comment');

            button.addEventListener('click', this._onMakeCommentClick.bind(this));
        }

        _onMakeCommentClick(event){
            let form = event.target.closest('#comment-form');
            let textarea = form.querySelector('textarea');
            let value = textarea.value;
            let commentHTML = this.commentTemplateFunction({
                comment: value
            });
            let commentCreated = new CustomEvent("commentCreated", {
                bubbles: true
            });


            this.post.insertAdjacentHTML('beforeEnd', commentHTML);
            this._removeForm();
            this.post.dispatchEvent(commentCreated);

        }
        _removeForm(){
            let form = document.getElementById('comment-form');
            form.remove();
        }
    };


