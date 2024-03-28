<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style type="text/css">
table {
	border-collapse: collapse;
}
th, td {
	padding: 5px;
	width: 200px;
}
</style>
</head>
<body>
<form id="uploadListForm">
	<table id="uploadListTable" border="1" frame="hsides" rules="rows">
		<tr>
			<th width="100"><input type="checkbox" id="all">번호</th>
			<th width="200">이미지</th>
			<th width="200">이미지 이름</th>
		</tr>
		
		<!-- 동적처리 -->
	</table>
	<input type="button" id="uploadDeleteBtn" value="삭제" style="margin-top: 5px;">
</form>

<script type="text/javascript" src="http://code.jQuery.com/jquery-3.7.1.min.js"></script>
<script type="text/javascript" src="../js/uploadList.js"></script>
<script type="text/javascript" src="../js/uploadDelete.js"></script>
<!-- <script type="text/javascript">
$(function() {
	$("#uploadDeleteBtn").click(function() {
		$.ajax({
				type:'post',
				url: '/mini/user/uploadDelete',
				data: $('#uploadListForm').serialize(),
				/* dataType:'text',  return값 없음*/
				success: function(data){
					alert("이미지 삭제 완료");
					location.href = '/mini/user/uploadList';
				},
				error: function(e){
					console.log(e);
				}			
		});
	});
});
</script> -->
</body>
</html>














