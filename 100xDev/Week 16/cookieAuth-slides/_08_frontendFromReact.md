# Frontend from express

1.  Add an index.html file in src folder of backend

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
</head>
<body>

<input id="username" type="text" placeholder="username" />
<input id="password" type="password" placeholder="password" />
<button id="loginButton">Submit</button>
<button id="logoutButton">Logout</button>
<div id="userData"></div>


<script>

    document.getElementById('loginButton').addEventListener('click', async () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        try {
            await axios.post(`/signin`, {
                username,
                password
            });
            alert("You are logged in");
        } catch (error) {
            console.error('Login failed:', error);
            alert("Login failed");
        }
    });

    document.getElementById('logoutButton').addEventListener('click', () => {
        axios.post(`/logout`, {}, {
            withCredentials: true,
        }).then(() => {
            console.log('Logged out successfully.');
        }).catch(error => {
            console.error('Logout failed:', error);
        });
    });

    function fetchUserData() {
        axios.get(`/user`, {
            withCredentials: true,
        }).then(response => {
            const userData = response.data;
            displayUserData(userData);
        }).catch(error => {
            console.error('Failed to fetch user data:', error);
        });
    }

    function displayUserData(userData) {
        const userDataDiv = document.getElementById('userData');
        // Example: Assumes userData contains a 'name' and 'email'. Adapt based on your actual user data structure.
        userDataDiv.innerHTML = `<p>Your id is: ${userData.userId}</p>`;
    }
    fetchUserData();
</script>

</body>
</html>
```

1.  Add a route that sends this html file

```javascript
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../src/index.html"))
})
```

1.  Remove `credentials` from cors

```javascript
app.use(cors());
```

Link - [https://github.com/100xdevs-cohort-2/week-16-auth-1](https://github.com/100xdevs-cohort-2/week-16-auth-1)