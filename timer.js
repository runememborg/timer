'use strict';
var _index = 0;
var _interval = null;
var _curIndex = -1;
var _wait = 1000*60;
var _totalTime = 0;
var _elm = null;
var _elmTotalTime = null;

var UpdateButton = function(){
    var timer = +_elm.timer;
    timer++;
    _totalTime++;
    var text = _elm.title + ': ' + timer + 'min';
    _elm.timer = timer;
    _elm.innerHTML = text;
    _elmTotalTime.innerHTML = 'Total: ' + _totalTime + 'min';
};

var StartButton = function(){
    clearInterval(_interval);
    var index = this.index;
    if(_elm !== null){
        _elm.style.fontWeight = 'normal';
    }
    _curIndex = +index;
    _elm = document.getElementById('button' + _curIndex);
    _elm.style.fontWeight = 'bold';
    _interval = setInterval(UpdateButton, _wait);
};

var AddTimer = function(){
    var r = Math.floor((Math.random()*255));
    var g = Math.floor((Math.random()*255));
    var b = Math.floor((Math.random()*255));
    var title = window.prompt('title', '');

    var button = document.createElement('button');
    button.setAttribute('type','button');
    button.id = 'button' + _index;
    button.index = _index;
    button.title = title;
    button.innerHTML = title + ': 0min';
    button.timer = 0;
    button.onclick = StartButton;        
    button.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
    _curIndex = _index;
    _index++;
    document.body.appendChild(button);

    button.click();
};

var Init = function(){
    var button = document.getElementById('jsnewtimer');
    button.onclick = AddTimer;
    _elmTotalTime = document.getElementById('jstotaltime');
};

Init();
