# Bugs

- manager form does not reset fields to empy after form submit. Get rid of the react-bootstrap?
- manager list does not automatically rerender when a new manager has been added. Use a useEffect?
- property list does not automatically rerender whena a new property has been added.
- total cost does not populate correctly. Delete this feature?

- last error when Updating the property form:
    ValueError: Cannot assign "'7'": "Addresses.manager" must be a "Managers" instance.
    [26/Apr/2023 22:42:14] "PUT /user/updateproperty/34 HTTP/1.1" 500 99905

    the database model wants a whole instance object not the id as a string.