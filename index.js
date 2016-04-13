/**
 * Created by Artem on 13.04.2016.
 */
'use strict';
document.addEventListener("DOMContentLoaded", ready);

function ready(){
    let options = {
        elem: document.getElementById('comments'),
        commentTemplate:document.getElementById('sub-media-template').innerHTML,
        formTemplate:document.getElementById('form-template').innerHTML
    };
    let commentModule = new CommentModule(options);
}

