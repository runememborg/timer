'use strict';
var _oneMinute = 60*1000;
var _totalTime = 0;
var _elm = null;
var _elmTotalTime = null;
var log = function(){
    if (typeof(console) !== "undefined" && console.log !== undefined){
        try{
            console.log.apply(console, arguments);
        }
        catch (e){
            var log = Function.prototype.bind.call(console.log, console);
            log.apply(console, arguments);
        }
    }
};

var ToggleButton = function(){
    var starttime = 0;
    var now = new Date().getTime();
    var elapsed = 0;
    var days = 0;
    var timer = 0;
    if(_elm !== null){
        _elm.style.fontWeight = 'normal';
        timer = +_elm.timer;
        starttime = _elm.started.getTime();
        elapsed = Math.abs((now - starttime) / _oneMinute);
        days = Math.round(elapsed);
        _elm.timer = timer + days;
        _elm.innerHTML = _elm.title + ': ' + _elm.timer + 'min';
    }else if(_elm === this){
        timer = +_elm.timer;
        starttime = _elm.started.getTime();
        elapsed = Math.abs((now - starttime) / _oneMinute);
        days = Math.round(elapsed);
        _elm.timer = timer + days;
        _elm.innerHTML = _elm.title + ': ' + _elm.timer + 'min';
    }

    _totalTime += days;
    _elmTotalTime.innerHTML = 'Total: ' + _totalTime + 'min';

    _elm = this;
    _elm.started = new Date();
    var active = +_elm.active;
    active++;
    _elm.style.fontWeight = 'bold';
};

var AddTimer = function(){
    var r = Math.floor((Math.random()*255));
    var g = Math.floor((Math.random()*255));
    var b = Math.floor((Math.random()*255));
    var title = window.prompt('title', '');
    var sum = r+b+g;

    var button = document.createElement('button');
    button.setAttribute('type','button');
    button.title = title;
    button.innerHTML = title;
    button.timer = 0;
    button.active = 0;
    button.started = new Date();
    button.onclick = ToggleButton;        
    button.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
            if(sum < 300){
                button.style.color= '#fff';
            }
            document.body.appendChild(button);
            button.click();
            };

            var Init = function(){
                var button = document.getElementById('jsnewtimer');
                button.onclick = AddTimer;
                _elmTotalTime = document.getElementById('jstotaltime');
            };

            Init();

