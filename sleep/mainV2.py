from pyscript import document
from js import document, console


def updateNumb(event):
    dayNumb = document.querySelector("#dayNumb").value
    if int(dayNumb) in numbDict:
        document.getElementById("value").innerHTML = numbDict[int(dayNumb)][0]
    else: 
        document.getElementById("value").innerHTML = ". . . "


    rows = (document.getElementById("row").childElementCount - 1 ) / 24 # vvv make lst to broadcast
    val= ""
    for i in range(int(rows)):
        curDayNumb = int(dayNumb) + i
        if curDayNumb in numbDict:
             val += (numbDict[curDayNumb][1])
        else: 
             val += ("g" * 24)

    broadcastToRow(val)



def broadcastToRow(val):
    row = document.getElementsByTagName("square")
    for i in range(len(val)):
        if val[i] == 'w':
            row[i].style.backgroundColor = "white"
            row[i].style.color = "#cccccc"
        elif val[i] == 'b':
            row[i].style.backgroundColor = "black"
            row[i].style.color = "#333333"
        else:
            row[i].style.backgroundColor = "grey"
            row[i].style.color = "#B3B3B3"


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

f = open("./files/FILE6.TXT", "r")
file = f.read()
numbDict = makeNumbDict(file)