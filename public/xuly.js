
var socket = io("http://localhost:3000");

socket.on("server-send-ds-room",function(data){
	$("#listRoom").html("");
	data.map(function(r) {
		$("#listRoom").append('<h4 class="room">'+  r +'</h4>')
	})
});

socket.on("server-goi-current-room",function(data){
	$("#roomHienTai").html(data);
});

socket.on("server-chat",function(data){
	$("#content").append("<div>"+ data +"</div>")
});

$(document).ready(function(){
	$("#btnTaoRoom").click(function(){
		socket.emit("tao-room",$("#txtRoom").val());
	})

	$("#btnChat").click(function(){
		socket.emit("client-chat",$("#txtChat").val());
	})

	$("#left").click(function(){
		alert(1);
	});
});