from flask import Flask, render_template, request    # import the Flask class, render_template function 
import numpy as np    # import numpy library
import pickle    # import pickle module for loading the ml model to make prediction

app = Flask(__name__);    # creating an instance of Flask class

loan_model = pickle.load(open('loan__model.pkl', 'rb'))    # loading the logistic regression model

# route tells flask that which url should trigger the respective function

@app.route("/")
def func() :    # if browser url is /, that is default, then this function will be triggered, which will open index.html file
    return render_template("index.html")

@app.route('/prediction', methods = ['POST', 'GET'])  
def prediction():    # if browser url is /prediction, then this function will be triggered 
    

    # fetching the form data using the name attribute in the html form

    gender = request.form['gender'];
    married = request.form['married'];
    depend = request.form['dependents'];
    depend = int(depend);
    emp = request.form['selfemp'];
    education = request.form['education'];
    credit = request.form['credit'];
    proparea = request.form['proparea'];
    appli = request.form['appli'];
    appli = int(appli);
    Coapp = request.form['Coapp'];
    Coapp = float(Coapp);
    loanAmount = request.form['LoanAmount'];
    loanAmount = float(loanAmount);
    loanterm = request.form['loanterm'];
    loanterm = float(loanterm);
    

    # after getting the form data, we process it in a way to be able to feed it to our model
    # converting to numerical data


    rural = 0
    semiurban = 0
    
    if(credit == 'Yes') :
        credit = 1.0
    else :
        credit = 0.0
    
    if(married == 'Yes') :
        married = 1
    else :
        married = 0    
    
    if(gender == 'Male') :
        gender = 0
    else :
        gender = 1    

    if(education == 'graduate') :
        education = 1
    else :
        education = 0 

    if(emp == 'Yes') :
        emp = 1
    else :
        emp = 0
    
    if(proparea == 'rural') :
        rural = 1
        semiurban = 0
    elif(proparea == 'semiurban') :
        rural = 0
        semiurban = 1
   
    loanamountlog = np.log(loanAmount)

    incometotallog = np.log(appli+Coapp);
    input_data = (married, depend, education, emp,
               loanterm, credit, gender, rural, semiurban, loanamountlog, incometotallog);
    #print(input_data);

    input_data = np.asarray(input_data);    # converting tuple to numpy array
    input_data = input_data.reshape(1, -1);
    predict_out = loan_model.predict(input_data);    # prediction is stored in predict_out variable, 1 means approved, 0 means not approved
    
    if(predict_out == 1) :
        display = "Loan is Approved";
    else :   
        display = "Loan Not Approved";

    # below will open index.html file along with prediction status, that will be displayed with help of jinja template

    return render_template("index.html", status=1, pred=display);    

if __name__ == "__main__" :
    app.run(debug = True)    # run this app, debug means, during development it will show all errors in browser 