INSERT INTO family(id, language)
    VALUES (1, 'en');

INSERT INTO guardian (id, type, family_id, first_name, last_name, email, phone_number, address_1, address_2, city, state, zip)
    VALUES (1, 'primary', 1, 'Alex', 'Bregan', '', '', '1705 17th St', '#200', 'Denver', 'CO', '80202');

INSERT INTO child (id, family_id, first_name, last_name, monthly_allocation, prorated_allocation, status, payment_enabled)
VALUES
    (1, 1, 'Roman', 'Anthony', 1200, 600, 'Approved', TRUE),
    (2, 1, 'Trevor', 'Story', 1000, 800, 'Approved', TRUE);

INSERT INTO provider (id, name, first_name, last_name, email, phone, care_location_address_1, care_location_address_2, care_location_city, care_location_state, care_location_zip, preferred_language, status, type, payment_enabled, cpr_training_link, cpr_certified)
VALUES
    (1, 'Red Sox', 'Alex', 'Cora', '', '', '1705 17th St', '#200', 'Denver', 'CO', '80202', 'en', 'Approved', 'ffn', TRUE, 'https://youtube.com/watch?v=zk-2_Z9bRds', 'No'),
    (2, 'WooSox', 'Chad', 'Tracy', '', '', '1705 17th St', '#200', 'Denver', 'CO', '80202', 'en', 'Approved', 'center', TRUE, 'https://youtu.be/VTUG-wrriaM?feature=shared', 'No');

INSERT INTO provider_child_mapping (provider_id, child_id)
VALUES
    (1, 1),
    (1, 2),
    (2, 1),
    (2, 2);

