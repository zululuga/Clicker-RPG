var pdmg = 1;
var atk = document.getElementById("atk").innerHTML = pdmg;
var def = 0;
var hp = document.getElementById("hp").innerHTML;
var points = 0;
var monsterhp = 10
var monsterstarthp = 10
var lvl = 1

function takedmg() {
    document.getElementById("fireball").style.opacity = 1
    monsterhp = `${monsterhp - pdmg}`
    document.getElementById("monsterhp").innerText = monsterhp
    setTimeout(function(){ document.getElementById("fireball").style.opacity = 0 }, 100);
    console.log(monsterhp);

    if (monsterhp <= 0) {
        points = points+1
        document.getElementById("pointnumber").innerHTML = points
        lvl = lvl+1
        document.getElementById("monsterlv").innerHTML = lvl
        monsterstarthp = monsterstarthp*2
        monsterhp = monsterstarthp
        document.getElementById("monsterhp").innerHTML = monsterhp
    }
}

function addatk() {
    // console.log("click");
    if (points >=1) {
        
        atk = (atk+1)
        document.getElementById("atk").innerHTML = atk
        pdmg = atk
        points = (points-1)
        document.getElementById("pointnumber").innerHTML = points
    }

}

function rematk() {
    // console.log("click");
    if (atk >=2) {
        
        atk = (atk-1)
        document.getElementById("atk").innerHTML = atk
        pdmg = atk
        points = (points+1)
        document.getElementById("pointnumber").innerHTML = points
    }

}

document.getElementById("pointnumber").innerHTML = points;
document.getElementById("monsterlv").innerHTML = lvl;
document.getElementById("monsterhp").innerHTML = monsterhp;