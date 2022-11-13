from bs4 import BeautifulSoup
import requests 

def get_majors_links(url):
    result = requests.get(url)
    doc = BeautifulSoup(result.text, "html.parser")
    print(doc)

    #Writing output to txtfile 
    htmlOutput = doc.prettify
    with open('htmlOutput2.txt', 'a') as f:
        f.write(str(htmlOutput))

    

def get_courses(url):
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

    with open('coursesHopefully.txt', 'a') as f:
        for x in table:
            #courseHTML = x.find_all(["a"], class_="bubblelink code")
            courseTitle = x.find_all(["a"], class_="bubblelink code")
            for y in courseTitle:
                print(y.string.strip()) #TODO: put this output in a JSON file instead 

    # for x in table:
    #     print(x)
    #     print("\n")

    #print(table)

    #table = table.prettify

    # Writing the output to a txt file 
    # htmlOutput = doc.prettify
    # with open('htmlOutput.txt', 'a') as f:
    #     f.write(str(htmlOutput))

def main():
    mainUrl = "https://guide.wisc.edu/undergraduate/letters-science/#degreesmajorscertificatestext" #Url to the page with all the majors 
    get_majors_links(mainUrl)

    #get_courses("https://guide.wisc.edu/undergraduate/letters-science/computer-sciences/computer-sciences-bs/index.html#requirementstext")

if __name__ == "__main__":
    main()  

#url = "https://guide.wisc.edu/undergraduate/letters-science/computer-sciences/computer-sciences-bs/index.html#requirementstext"
#url2 = "https://guide.wisc.edu/undergraduate/letters-science/atmospheric-oceanic-sciences/environmental-sciences-ba/index.html#requirementstext"
#url3 = "https://guide.wisc.edu/undergraduate/letters-science/communication-arts/communication-arts-bs/index.html#requirementstext" #this itself has 2 links within
#url4 = "https://guide.wisc.edu/undergraduate/letters-science/communication-arts/communication-arts-ba/communication-arts-communication-science-rhetorical-studies-ba/"
