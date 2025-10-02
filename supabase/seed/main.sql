INSERT INTO family(id, language)
    VALUES 
	(1, 'en'),
    	(2, 'en'),
    	(3, 'en');

INSERT INTO guardian (id, type, family_id, first_name, last_name, email, phone_number, address_1, address_2, city, state, zip)
    VALUES 
	(1, 'primary', 1, 'Family', 'Name', '', '', '1705 17th St', '#200', 'Denver', 'CO', '80202'),
    	(2, 'primary', 2, 'Family', 'Name', '', '', '1705 17th St', '#200', 'Denver', 'CO', '80202'),
    	(3, 'primary', 3, 'Family', 'Name', '', '', '1705 17th St', '#200', 'Denver', 'CO', '80202');

INSERT INTO child (id, family_id, first_name, last_name, monthly_allocation, prorated_allocation, status, payment_enabled)
VALUES
    (1, 1, 'Child 1', 'Name', 1200, 600, 'Approved', TRUE),
    (2, 1, 'Child 2', 'Name', 1000, 800, 'Approved', TRUE),
    (3, 2, 'Child 3', 'Name', 1200, 600, 'Approved', TRUE),
    (4, 2, 'Child 4', 'Name', 1000, 800, 'Approved', TRUE),
    (5, 3, 'Child 5', 'Name', 1200, 600, 'Approved', TRUE),
    (6, 3, 'Child 6', 'Name', 1000, 800, 'Approved', TRUE);

INSERT INTO provider (id, name, first_name, last_name, email, phone, care_location_address_1, care_location_address_2, care_location_city, care_location_state, care_location_zip, preferred_language, status, type, payment_enabled, cpr_training_link, cpr_certified)
VALUES
    (1, 'Family, Friend, Neighbor 1', 'Family', 'Friend Neighbor', '', '', '1705 17th St', '#200', 'Denver', 'CO', '80202', 'en', 'Approved', 'ffn', TRUE, 'https://youtube.com/watch?v=zk-2_Z9bRds', 'No'),
    (2, 'Center 1', 'Center', 'Center', '', '', '1705 17th St', '#200', 'Denver', 'CO', '80202', 'en', 'Approved', 'center', TRUE, 'https://youtu.be/VTUG-wrriaM?feature=shared', 'No'),
    (3, 'Family, Friend, Neighbor 2', 'Family', 'Friend Neighbor', '', '', '1705 17th St', '#200', 'Denver', 'CO', '80202', 'en', 'Approved', 'ffn', TRUE, 'https://youtube.com/watch?v=zk-2_Z9bRds', 'No'),
    (4, 'Center 2', 'Center', 'Center', '', '', '1705 17th St', '#200', 'Denver', 'CO', '80202', 'en', 'Approved', 'center', TRUE, 'https://youtu.be/VTUG-wrriaM?feature=shared', 'No'),
    (5, 'Family, Friend, Neighbor 3', 'Family', 'Friend Neighbor', '', '', '1705 17th St', '#200', 'Denver', 'CO', '80202', 'en', 'Approved', 'ffn', TRUE, 'https://youtube.com/watch?v=zk-2_Z9bRds', 'No'),
    (6, 'Center 3', 'Center', 'Center', '', '', '1705 17th St', '#200', 'Denver', 'CO', '80202', 'en', 'Approved', 'center', TRUE, 'https://youtu.be/VTUG-wrriaM?feature=shared', 'No');

INSERT INTO provider_child_mapping (provider_id, child_id)
VALUES
    (1, 1),
    (1, 2),
    (2, 1),
    (2, 2),
    (3, 3),
    (3, 4),
    (4, 3),
    (4, 4),
    (5, 5),
    (5, 6),
    (6, 5),
    (6, 6);

