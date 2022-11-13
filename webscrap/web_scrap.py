from bs4 import BeautifulSoup
import requests 

# This function gets all the major's names and linkes to their requirement page
# Returns a dictionary with major_name, link pair 
def get_majors_links(url):
    result = requests.get(url)
    doc = BeautifulSoup(result.text, "html.parser")
    #print(doc)

    #Writing output to txtfile 
    # htmlOutput = doc.prettify
    # with open('htmlOutput2.txt', 'a') as f:
    #     f.write(str(htmlOutput))
    #TODO : delete this thing above 

    table = doc.find(["div"], class_="visual-sitemap grid")
    children = table.findChildren("a") #Children node here gives me the entire HTML code of the list of majors 
    link_major_pair ={}
    for x in children:
        if "B.S." not in x.string:
            #print(x["href"])
            #print(x.string)
            #print()
            link_major_pair[x.string] = x["href"]
    #print(link_major_pair["Zoology, B.A."])
    #table = doc.find_all(["ul"])
    #print(children)
    return link_major_pair

# This function visits the website for the specific major, and outputs a JSON file
# containing the major name and code
def get_courses(major, url):
    result = requests.get(url) #gets the stuff in this url into result 
    doc = BeautifulSoup(result.text, "html.parser") # doc = html of that page 

    # Basic Commands :
    #     print(result.text) -> Gives us raw html

    #header = doc.find_all(["h2"], text="Requirements for the Major")
    #tag = doc.find_all(text="Requirements for the Major")
    #print(header)

    table = doc.find_all(["table"], class_="sc_courselist") #gets all the tables in the page 

    # with open('tableOutput.txt', 'a') as f:
    #     for x in table: #For each subtable in the table 
    #         f.write(str(x))
    #         f.write("\n \n")

    # Writing the data to a JSON file 
    f = open('courseList.json', 'w').close() # To clear the file that could have old data 
    stringOutput = "{\n    \""+major+"\": {\n       \"majorName\": \"" + major + "\",\n       \"courses\": [\n          "
    #print(stringOutput)
 
    for x in table:
        courseCode = x.find_all(["a"], class_="bubblelink code")
        for y in courseCode:
            x = y.parent.next_sibling

            print(y.string)
                    #print(y.string.strip()) #TODO: put this output in a JSON file instead 
                    #f.write(y.string.strip())
            y = y.string.strip()
                    #print(y[:-3])
    stringOutput = stringOutput + "\n           {\n                 \"courseSubject\": \""+y[:-3].strip()+"\",\n                "+"\"courseCode\": \""+y[-3:].strip() + "\",\n              \"courseName\": \"" + "course name" + "\""
    #with open('courseList.txt', 'a') as f:
    print(stringOutput)

    # toJSON(courseTitle, major)

    # for x in table:
    #     print(x)
    #     print("\n")

    #print(table)

    #table = table.prettify

    # Writing the output to a txt file 
    # htmlOutput = doc.prettify
    # with open('htmlOutput.txt', 'a') as f:
    #     f.write(str(htmlOutput))

# def toJSON(courses, major):
#     start = '{"subject": "' 
#     middle = '","code": '
#     end = '}'

#     f = open('"' + major + '.json', 'a')
#     for i in courses:
#         object = start + i[0:len(i) - 5] + middle + i[len(i) - 3:len(i - 1)] + end
#         f.write(object)
#     f.close()

def main():
    mainUrl = "https://guide.wisc.edu/undergraduate/letters-science/#degreesmajorscertificatestext" #Url to the page with all the majors 
    major_link_pairs = get_majors_links(mainUrl)
    keyList = major_link_pairs.keys()
    #print(major_link_pairs)
    
    #get_courses("Computer Science", "https://guide.wisc.edu/undergraduate/letters-science/computer-sciences/computer-sciences-bs/index.html#requirementstext" )

    for x in major_link_pairs:
        finalLink = "https://guide.wisc.edu" + major_link_pairs[x] + "#requirementstext"
        get_courses(x, finalLink)


        #print(x, finalLink)

    #get_courses("https://guide.wisc.edu/undergraduate/letters-science/computer-sciences/computer-sciences-bs/index.html#requirementstext")

if __name__ == "__main__":
    main()  

#url = "https://guide.wisc.edu/undergraduate/letters-science/computer-sciences/computer-sciences-bs/index.html#requirementstext"
#url2 = "https://guide.wisc.edu/undergraduate/letters-science/atmospheric-oceanic-sciences/environmental-sciences-ba/index.html#requirementstext"
#url3 = "https://guide.wisc.edu/undergraduate/letters-science/communication-arts/communication-arts-bs/index.html#requirementstext" #this itself has 2 links within
#url4 = "https://guide.wisc.edu/undergraduate/letters-science/communication-arts/communication-arts-ba/communication-arts-communication-science-rhetorical-studies-ba/"
