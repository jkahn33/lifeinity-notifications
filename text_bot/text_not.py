#imports the twilio client and psycopg2 for accessing the database
from twilio.rest import Client
import psycopg2
# twilio acount SID and auth token
client = Client("ACf7b73d14dfc00d4ddf44c6b4741a2e99", "f8b5c87d679d3a640c6cebde61a68130")

#connects to the databse, logs an error if it fails
try:
    conn = psycopg2.connect("postgres://rrrfsgcdwxkskq:58b01356c61c9198cd066eee74180fae654dee177e985fdf7bae300ded869a9a@ec2-54-163-229-169.compute-1.amazonaws.com:5432/d9smq5gn6igah0")
except:
    print("ERROR: unable to connect to the database!")
cur = conn.cursor()
#gets all information from database
cur.execute("""SELECT * from drivers""")
rows = cur.fetchall()

print("Enter the message you would like to send.")
message = input()
print("Confirm you would like to send the following message (Y/N) or type \"CANCEL\" to send nothing: ")
print(message)

#confirms message and sends a text to each number in the database
valid = False
confirm = input()
while valid == False:
    while confirm == 'N' or confirm == 'n':
        print("Enter the message you would like to send.")
        message = input()
        print("Confirm you would like to send the following message (Y/N) or type \"CANCEL\" to send nothing: ")
        print(message)
        confirm = input()
    if confirm == "CANCEL":
        print("Goodbye")
        valid = True
    elif confirm == 'Y' or confirm == 'y':
        for row in rows:
            client.messages.create(to=row[2],
                                   from_="2079948345",
                                   body=message)
        valid = True
    else:
        print("Invalid input. Please type \"Y\", \"N\", or \"CANCEL\".")
        confirm = input()
