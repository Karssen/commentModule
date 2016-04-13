/**
 * Created by Artem on 13.04.2016.
 */
'use strict';

class makeCounter{
    constructor(){
        this.amount = 1;
    }
    count(){
        return this.amount++;
    }
}