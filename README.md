# cypress-kiwi
Solution of practical Kiwi task


Test cases for Question number 2
Test cases for Primary passenger section

Suggestion: For generating different text/numeric values, you can use the tool Bug magnet (plugin for browser). With this tool you can instantly paste values into the inputs, including invalid values and names in different languages like chinese or arabic. 


Fill valid first name and surname - high priority
GIVEN User is on passenger details page
WHEN User fill valid first name and surname
THEN Values are filled correctly in inputs

Select valid nationality and genre - high priority
GIVEN User is on passenger details page
WHEN User select nationality and genre from dropdowns
THEN Values are selected correctly

Fill valid date of birth - high priority
GIVEN User is on passenger details page
WHEN User fill date of birth
THEN Values are filled correctly in inputs

Fill valid passport/ID number  - high priority
GIVEN User is on passenger details page
WHEN User fill number of passport/ID
THEN Values are filled correctly in inputs

Fill valid date of expiration - high priority
GIVEN User is on passenger details page
WHEN User fill date of expiration
THEN Values are filled correctly in inputs

Check “No expiration” checkbox - high priority
GIVEN User is on passenger details page
WHEN User check “No expiration” checkbox
THEN Date of expiration is disabled but visible

Nothing is filled and selected - high priority
GIVEN User is on passenger details page
WHEN User click on Continue at the bottom of page
THEN Fields like Given Name, Surname, Nationality, Genre, Birthdate, Passport etc. are marked as required fields

Fill date of birth with future date - medium priority
GIVEN User is on passenger details page
WHEN User fill date of birth, which is date in future
THEN Values are filled
AND Validation tooltip with “Year must be in the range…” is visible


Fill date of passport/ID expiration with past date - medium priority
GIVEN User is on passenger details page
WHEN User fill date of birth, which is date in future
THEN Values are filled
AND Validation tooltip with “Already expired” is visible

Textbox inputs are filled with number values - medium priority
GIVEN User is on passenger details page
WHEN User fill input with incorrect data type 
THEN Values are not filled
AND Input shake

Numeric box inputs are filled with text values - medium priority
GIVEN User is on passenger details page
WHEN User fill input with incorrect data type 
THEN Values are not filled
AND Input shake

Fill name with non-latin charset - medium priority
GIVEN User is on passenger details page
WHEN User fill name in non latin charset
THEN Values are filled
AND Validation tooltip with “Use Latin characters only” is visible
AND This validation is visible also in non latin UI localisation

Fill fields with long inputs - medium priority
GIVEN User is on passenger details page
WHEN User fill name or other input with long strings like 128b
THEN Values are not filled
AND Input shake

Fill fields with HTML tags and SQL commands - low priority
GIVEN User is on passenger details page
WHEN User fill name or other input with HTML tags or SQL commands (or SQL injection)
THEN Values are not filled
AND Input shake

Change size of page/window - low priority
GIVEN User is on passenger details page
WHEN User resize window with passenger details page
THEN Elements on page resize
AND All elements and texts are visible


