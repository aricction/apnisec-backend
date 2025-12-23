async function testCreateIssue() {
  try {
    // First register a user
    console.log('Registering user...');
    const registerResponse = await fetch('http://localhost:4000/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        password: 'password123'
      })
    });
    const registerData = await registerResponse.json();
    console.log('Register response:', registerData);

    // Login to get token
    console.log('Logging in...');
    const loginResponse = await fetch('http://localhost:4000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: 'test@example.com',
        password: 'password123'
      })
    });
    const loginData = await loginResponse.json();
    console.log('Login response:', loginData);

    const token = loginData.data.token;

    // Create an issue
    console.log('Creating issue...');
    const createIssueResponse = await fetch('http://localhost:4000/api/issues', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: 'Test Issue',
        description: 'This is a test issue',
        type: 'bug',
        priority: 'high',
        status: 'open'
      })
    });

    const createIssueData = await createIssueResponse.json();
    console.log('Create issue response:', createIssueData);

  } catch (error) {
    console.error('Error:', error.message);
  }
}

testCreateIssue();