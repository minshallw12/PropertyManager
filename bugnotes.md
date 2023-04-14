# Bugs

- On start navbar shows the logged-in navbar because the current user is {user: null}
- When I click logout, the function sets current user to 'null' not {user: null},
    and thus the navbar adjusts to show the logged-out navbar.
