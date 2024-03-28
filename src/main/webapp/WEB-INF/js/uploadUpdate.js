$(function(){
	$.ajax({
		type:'post',
		url:'/mini/user/getUploadImage',
		data:{'seq': $('#seq').val()},
		dataType:'json',
		success: function(data){
			console.log(JSON.stringify(data));
			
			var result = `<img src="https://kr.object.ncloudstorage.com/bitcamp-6th-bucket-78/storage/`+ data.imageFileName+ `" width="70" height="70" />`;
			
			$('#imageName').val(data.imageName);
			$('#imageContent').val(data.imageContent);
			$('#showImgList').html(result);
		},
		error:function(e){
			console.log(e);
		}
	});
});