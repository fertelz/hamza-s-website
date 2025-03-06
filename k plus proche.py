from pandas import *
import matplotlib.pyplot as plt
iris=read_csv("iris.csv")
x=iris.loc[:,"petal_length"]
y=iris.loc[:,"petal_width"]
lab=iris.loc[:,"species"]
longueur=2.5
largeur=0.75
k=3
iris['distance']=((longueur-iris['petal_length'])**2+(largeur-iris['petal_width'])**2)**0.5
print(iris.sort_values(by='distance').iloc[0:k,2].mode()[0])
plt.axis('equal')
plt.scatter(x[lab == 0], y[lab == 0], color='g', label='setosa')
plt.scatter(x[lab == 1], y[lab == 1], color='r', label='versicolor')
plt.scatter(x[lab == 2], y[lab == 2], color='b', label='virginica')
plt.scatter(longueur,largeur, color='k')
plt.legend()
plt.show()



