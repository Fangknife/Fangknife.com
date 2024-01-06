from pyscript import document

from js import document, console

    

def updateNumb(event):
    dayNumb = document.querySelector("#dayNumb").value
    if int(dayNumb) in numbDict:
        dayVal = numbDict[int(dayNumb)]
        document.querySelector("#output").innerText = dayVal
        broadcastToRow(dayVal[1])
        dateTmp = dayVal[0]
        newDate = dateTmp[6:] + "-" + dateTmp[:2] + "-" + dateTmp[3:5]  # yyyy-mm-dd
        document.querySelector("#dateNumb").value = newDate
    else: 
         broadcastToRow(range(24))
         document.querySelector("#dateNumb").value = ""

def updateDate(event):  
    dateTmp = document.querySelector("#dateNumb").value # yyyy-mm-dd
    newDate = dateTmp[5:7] + "/" + dateTmp[8:10] + "/" + dateTmp[:4] # mm/dd/yyyy
    if newDate in dateDict:
        dateVal = dateDict[newDate]
        document.querySelector("#output").innerText = dateVal
        document.querySelector("#dayNumb").value = dateVal[0]
        broadcastToRow(dateVal[1])
    else:
         document.querySelector("#dayNumb").value = ""
         broadcastToRow(range(24))

def broadcastToRow(val):
    row = document.getElementsByTagName("square")
    for i in range(24):
        if val[i] == 'w':
            row[i].style.backgroundColor = "white"
        elif val[i] == 'b':
            row[i].style.backgroundColor = "black"
        else:
            row[i].style.backgroundColor = "grey"



# startup functions vvv
def makeNumbDict(filename):
    d = {}
    for line in file.split("\n"):
        tmpLst = []
        if "x" not in line and line != "":  # create dict
            tmp = int(line[0:4])
            tmpLst.append(line[5:15])
            tmpLst.append(line[16:41])
            d[tmp] = tmpLst
    return d    # dict mapping { dayNumb : ['date', 'bbbwww'], }

def makeDateDict(filename):
    d = {}
    for line in file.split("\n"):
        tmpLst = []
        if "x" not in line and line != "":  # create dict
            tmp = (line[5:15])
            tmpLst.append(int(line[0:4]))
            tmpLst.append(line[16:41])
            d[tmp] = tmpLst
    return d    # dict mapping { 'date' : [dayNumb, 'bbbwww'], }

f = open("files/FILE6.TXT", "r")
file = f.read()
x = 0
for line in file.split("\n"):
    if "x" not in line and line != "":
        x += 1
document.querySelector("#slider").value = 0 # get max day & set
document.querySelector("#slider").max = x  
numbDict = makeNumbDict(file)
dateDict = makeDateDict(file)
