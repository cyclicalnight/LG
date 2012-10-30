<%@ page pageEncoding="utf-8" contentType="application/json"%>
<%!
	private Boolean checkBy(String id, String pw) {
	    return "okuser".equals(id) && "okpass".equals(pw);
	}
%>
<%
	String id = request.getParameter("id");
	String pw = request.getParameter("password");

	if (checkBy(id, pw)) {
%>
{ "success" : true, "info": {"id": "<%= id %>"} }
<%
	} else {
%>
{ "success" : false, "info": {"id": "<%= id %>"} }
<%		
	}
%>