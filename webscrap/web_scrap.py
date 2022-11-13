from bs4 import BeautifulSoup
import requests 

url = "https://guide.wisc.edu/undergraduate/letters-science/computer-sciences/computer-sciences-bs/index.html#requirementstext"

result = requests.get(url) #gets the stuff in this url into var result 
doc = BeautifulSoup(result.text, "html.parser") # doc = html of that page 

# Basic Commands :
#     print(result.text) -> Gives us raw html

#header = doc.find_all(["h2"], text="Requirements for the Major")
#tag = doc.find_all(text="Requirements for the Major")
#print(header)

table = doc.find_all(["table"], class_="sc_courselist")

with open('tableOutput.txt', 'a') as f:
    for x in table:
        f.write(str(x))
        f.write("\n \n")

# for x in table:
#     print(x)
#     print("\n")

#print(table)

#table = table.prettify

# Writing the output to a txt file 
# htmlOutput = doc.prettify
# with open('htmlOutput.txt', 'a') as f:
#     f.write(str(htmlOutput))

