<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="TestApp.Pages.Login" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div id="root">
            <script>
                window.baseUrl = '<%= ResolveUrl ("~") %>';
            </script>

        </div>
    </form>
      <script src="../Dist/login.bundle.js" type="text/javascript">
  </script>
</body>
</html>
