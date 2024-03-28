$(function(){
	$.ajax({
		type:'post',
		url:'/mini/user/getUploadImage',
		data:{'seq': $('#seq').val()},
		dataType:'json',
		success: function(data){
			console.log(JSON.stringify(data));
			
			var result = `<img src="https://kr.object.ncloudstorage.com/bitcamp-6th-bucket-78/storage/`+ data.imageFileName+ `" width="300" height="300" />`;
			
			$('#imageSpan').html(result);
			$('#imageNameSpan').html(data.imageName);
			$('#imageOriginalNameSpan').html(data.imageOriginalName);
			$('#imageContentSpan').html(data.imageContent);
		},
		error:function(e){
			console.log(e);
		}
	});
});