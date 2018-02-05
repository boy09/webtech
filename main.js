var num=0;
var a=quicklist[0];
var list = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var listQ = [];
var score =0;
var count=10;
var now=0;
var check=0;
var totaltime=0;





function start() {
        $(".chooseChoice").show();
        $("#but10").show();
        $("#but20").show();
        $("#qn").hide();
        $("#butStart").hide();



}

function clickbut() {
    num=parseInt($("#"+window.event.target.id).val());
    $(".Quick").show();
    $(".Home").hide();

    random();
    a=quicklist[listQ[0]];
    document.getElementById("quickid").textContent = a.Q;
    document.getElementById("1").textContent = a.b1;
    document.getElementById("2").textContent = a.b2;
    document.getElementById("3").textContent = a.b3;
    document.getElementById("4").textContent = a.b4;
    document.getElementById("idImage").src = a.img;

    listQ.splice(0,1);
    num-=1;
    var time = setInterval(function() {
        var distance = count - now;
        document.getElementById("time").textContent = "Time : " + distance;
        if (distance==10 && check==1){
          clickans();
        }
        now+=1;
        if (distance==1){
          console.log(now);
          totaltime+=now;
          now=0;
          check=1;

        }
        if (check==2){
            clearInterval(time);
        }

    }, 1000);

}
function clickans() {

  try {
    var c=document.getElementById(window.event.target.id).textContent;
    var b=a.ans;
    // document.getElementById(ans).textContent;
    if (c===b){
      console.log("CORRECT");
      score+=1;
    }
      console.log(now);
    totaltime+=(now-1);
    console.log("total : "+totaltime);
    now=1;
    check=1;
    var distance = count - now;
    document.getElementById("time").textContent = "Time : " + 10;
  } catch (e) {

  } finally {

  }

  try {
    a=quicklist[listQ[0]];
    document.getElementById("quickid").textContent = a.Q;
    document.getElementById("1").textContent = a.b1;
    document.getElementById("2").textContent = a.b2;
    document.getElementById("3").textContent = a.b3;
    document.getElementById("4").textContent = a.b4;
    document.getElementById("idImage").src = a.img;
    listQ.splice(0,1);
    num-=1;
  } catch (e) {
    $(".Quick").hide();
      $(".ShowScore").show();
      console.log(score);
      document.getElementById("idScore").textContent = score;
      check=2;
        document.getElementById("idTime").textContent = totaltime;

  } finally {

  }


}

function random() {
  console.log("NUM : "+num);
  var r=21;
  for (i=0;i<num;i++){
      var x = Math.floor((Math.random() * r));
    listQ.push(list[x]);
    list.splice(x,1);
    r-=1;
  }
    console.log(list);
    console.log(listQ);
}
