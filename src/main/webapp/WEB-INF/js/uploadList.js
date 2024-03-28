$(function(){
	$.ajax({
		type: 'post',
		url: '/mini/user/getUploadList',
		dataType: 'json',
		success: function(data){
			console.log(JSON.stringify(data));
			
			$.each(data, function(index, items){
			
				/*
				$('<tr/>').append($('<td/>', {
					align: 'center',
					text: items.seq
					
				})).append($('<td/>', {
					align: 'center',
					}).append($('<img/>', {
						src: '../storage/' + items.imageOriginalName,
						style: 'width: 70px; height: 70px;'
					}))
					
				).append($('<td/>', {
					align: 'center',
					text: items.imageName
					
				})).appendTo($('#uploadListTable'));
				*/
				
				/*
				var result = `<tr>`
						   + `<td align="center">` + items.seq + `</td>`
						   + `<td align="center"><img src="../storage/` + items.imageOriginalName + `" style="width: 70px; height: 70px;"/></td>`
						   + `<td align="center">` + items.imageName + `</td>`
						   + `</tr>`;
						   
				$('#uploadListTable').append(result);
				*/
				
				//이미지는 NCP에서 가져옴
				var result = `<tr>`
						   + `<td align="center">` 
						   		+ `<input type="checkbox" name="check" id="check" value="` + items.seq + `">` + items.seq 
						   + `</td>`
						   + `<td align="center"><a href="/mini/user/uploadView?seq=` + items.seq+ `">` 
						   		+ `<img src="https://kr.object.ncloudstorage.com/bitcamp-6th-bucket-78/storage/` + items.imageFileName + `" style="width: 70px; height: 70px;"/>`
						   + `<a/></td>`
						   + `<td align="center">` + items.imageName + `</td>`
						   + `</tr>`;
				$('#uploadListTable').append(result);
				
			});//$.each
			
			//전체 선택,해제
			$('#all').click(function(){
				if($(this).prop('checked')){
					$('input[name="check"]').prop('checked', true);
				}else{
					$('input[name="check"]').prop('checked', false);
				}
			});
			
			
			//
			$('input[name="check"]').click(function(){
				$('#all').prop('checked', $('input[name="check"]:checked').length == $('input[name="check"]').length);
			});
		},
		error: function(e){
			console.log(e);
		}
	});//$.ajax
});









