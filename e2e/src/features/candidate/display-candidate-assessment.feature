Feature: Display candidate assessment feature

@43
Scenario: Verify the candidate assessment section fields accessability
When User will click on candidate tab
And User will open candidate assessment window whose status is "Pending Vanline Quote" and name as "Beal, Christopher"
And User will wait for candidate assessment grid to load
Then User will view firstname
And User will view lastname
And User will view email
And User will view level
And User will view business unit
And User will view departure
And User will view destination
And User will view no of rooms
And User will view no of childrens