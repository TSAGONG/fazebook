<!DOCTYPE html>
<html>
  <head>
    <title><%= 'Fazbook - Edit ' + user.firstName + "'s Profile" %></title>
    <link rel='stylesheet' href='/stylesheets/style.css' />
  </head>
  <body>
    <h1>Create a user!</h1>
    <form action="<%= '/users/' + user.id + '?_method=PUT' %>" method="POST">
      <div>
        <label>
          Email
          <input type="text" name="email" value="<%= user.email %>" />
        </label>
      </div>
      <div>
        <label>
          First
          <input type="text" name="firstName" value="<%= user.firstName %>" />
        </label>
      </div>
      <div>
        <label>
          Last
          <input type="text" name="lastName" value="<%= user.lastName %>" />
        </label>
      </div>
      <div>
        <label>
          Date of birth
          <input type="date" name="dob" value="<%= moment(user.dob).format('YYYY-MM-DD') %>" />
        </label>
      </div>

      <a href="<%= '/users/' + user.id %>">Cancel</a>
      <input type="submit" value="Save" />
      <form action="<%= '/users/' + user.id + '?_method=DELETE' %>" method="POST">
        <input type="submit" value="Delete user" />
      </form>
    </form>
  </body>
</html>
