
	/*Declaring the variables*/
	var w0 = 0
	var w1 = 0
	var w2 = 0
	var w3 = 0
	var w4 = 0
	var w5 = 0
	var tour1 = 0
	var tour2 = 0
	var tour3 = 0
	var tour4 = 0
	var tour5 = 0
	var sl_tour_cost = 0 
	var japan_tour_cost = 0 
	var nz_tour_cost = 0 
	var dubai_tour_cost = 0 
	var france_tour_cost = 0
	var username = 0
	var total_cost = 0
	
	/*Open the user login form when the button click*/
	function userProfile() {
		document.getElementById("userprofile_form").style.display = "block";
	}
	
	/*close the user login form and empty the fields when the button click*/
	function close_userProfile() {
		document.getElementById("userprofile_form").style.display = "none";
		document.getElementById("username").value = "";
		document.getElementById("email").value = "";
	}
	
	/*close the user login form , obtain values and change the username label when the button click*/
	function addUser() {
		document.getElementById("userprofile_form").style.display = "none";
		username = document.getElementById("username").value;
		email = document.getElementById("email").value;
		document.getElementById("username").value = "";
		document.getElementById("email").value = "";
		document.getElementById("username_label").textContent = username;
	}
	
	/*Open the form to obtain quantity when the button click*/
	function openForm_1() {
		document.getElementById("SL_form").style.display = "block";
	}
	
	/*close the form when the button click*/
	function closeForm_1() {
		document.getElementById("SL_form").style.display = "none";
		document.getElementById("sl_tour_days").value = "";
	}
	
	/*append the list*/	
	function Srilanka(){
		/*obtain values and store in the variables*/
		var w0 = document.getElementById('Sri-Lanka_Tour_Days-').id;
		console.log(w0);
		w1 = document.getElementById('sl_tour_days').value;
		/*Check whether the text field is empty or the input is invalid*/
		if ( isNaN(w1) || w1 <= 0)
		/*display invalid alert if the text field is empty or the iput is invalid*/
			alert("Please input a Value");
		else
			var li = document.createElement("li");
			/*Add number of items ordered from this critiria*/	
			tour1 = tour1 + w1
			/*Calculate the price*/
			sl_tour_cost = w1 * 15000
			/*Add price to the total bill*/
			total_cost = total_cost + sl_tour_cost 
			/*Append the list with came and quantity*/
			document.getElementById("list").appendChild(li).textContent = w0 + w1;
			/*Add price to the total amount label*/
			document.getElementById('total_bill').textContent = total_cost + " $ "
			document.getElementById("SL_form").style.display = "none"; 
			document.getElementById("sl_tour_days").value = "";
	}

	function openForm_2() {
		document.getElementById("japan_form").style.display = "block";
	}

	function closeForm_2() {
		document.getElementById("japan_form").style.display = "none";
		document.getElementById("japan_tour_days").value = "";
	}
		
	function Japan(){
		var w0 = document.getElementById('Japan_Tour_Days-').id;
		w2 = document.getElementById('japan_tour_days').value;
		if ( isNaN(w2) || w2 <= 0)
			alert("Please input a Value");
		else
			var li = document.createElement("li");
			japan_tour_cost = w2 * 20000
			tour2 = tour2 + w2
			total_cost = total_cost + japan_tour_cost
			document.getElementById("list").appendChild(li).textContent = w0 + w2;
			document.getElementById('total_bill').textContent = total_cost + " $ "
			document.getElementById("japan_form").style.display = "none"; 
			document.getElementById("japan_tour_days").value = "";	
	}

	function openForm_3() {
		document.getElementById("nz_form").style.display = "block";
	}

	function closeForm_3() {
		document.getElementById("nz_form").style.display = "none";
		document.getElementById("nz_tour_days").value = "";
	}
		
	function NewZealand(){
		var w0 = document.getElementById('New-Zealand_Tour_Days-').id;
		w3  = document.getElementById('nz_tour_days').value;
		if ( isNaN(w3) || w3 <= 0)
			alert("Please input a Value");
		else
			var li = document.createElement("li");
			nz_tour_cost =  w3 * 12000
			tour3 = tour3 + w3
			total_cost = total_cost + nz_tour_cost
			document.getElementById("list").appendChild(li).textContent = w0 + w3;
			document.getElementById('total_bill').textContent = total_cost + " $ "
			document.getElementById("nz_form").style.display = "none"; 
			document.getElementById("nz_tour_days").value = "";	
	}

	function openForm_4() {
		document.getElementById("dubai_form").style.display = "block";
	}

	function closeForm_4() {
		document.getElementById("dubai_form").style.display = "none";
		document.getElementById("dubai_tour_days").value = "";
	}
		
	function Dubai(){
		var w0 = document.getElementById('Dubai_Tour_Days-').id;
		w4  = document.getElementById('dubai_tour_days').value;
		if ( isNaN(w4) || w4 <= 0)
			alert("Please input a Value");
		else
			var li = document.createElement("li");
			dubai_tour_cost = w4  * 28000
			tour4 = tour4 + w4
			total_cost = total_cost + dubai_tour_cost
			document.getElementById("list").appendChild(li).textContent = w0 + w4;
			document.getElementById('total_bill').textContent = total_cost + " $ "
			document.getElementById("dubai_form").style.display = "none"; 
			document.getElementById("dubai_tour_days").value = "";	
	}

	function openForm_5() {
		document.getElementById("france_form").style.display = "block";
	}

	function closeForm_5() {
		document.getElementById("france_form").style.display = "none";
		document.getElementById("france_tour_days").value = "";
	}
		
	function France(){
		var w0 = document.getElementById('France_Tour_Days-').id;
		w5  = document.getElementById('france_tour_days').value;
		if ( isNaN(w5) || w5 <= 0)
			alert("Please input a Value");
		else
			var li = document.createElement("li");
			france_tour_cost = w5  * 30000
			tour5 = tour5 + w5
			total_cost = total_cost + france_tour_cost
			document.getElementById("list").appendChild(li).textContent = w0 + w5;
			document.getElementById('total_bill').textContent = total_cost + " $ "
			document.getElementById("france_form").style.display = "none"; 
			document.getElementById("france_tour_days").value = "";	
	}
	
	/*Confirm the order if the conditions meet the requirements*/
	function confirmOrder() {
		/*check whether the textfield is empty*/
		if (username == "" || email =="")
			/*Display the sog in form*/
			document.getElementById("userprofile_form").style.display = "block"
			
		else	
			/*pop up the final bill form and show the items and total amount*/
			document.getElementById("confirm_form").style.display = "block";
			document.getElementById("final_pop_up1").textContent = " Name : " + username
			document.getElementById("final_pop_up2").textContent = " Email : " + email
			document.getElementById("final_pop_up3").textContent = " You have select - " + tour5 + " - France Tour For " + france_tour_cost+".00 $"
			document.getElementById("final_pop_up4").textContent = " You have select - " + tour4 + " - Dubai Tour For " + dubai_tour_cost+".00 $"
			document.getElementById("final_pop_up5").textContent = " You have select - " + tour3 + " - New Zealand Tour For " + nz_tour_cost+".00 $"
			document.getElementById("final_pop_up6").textContent = " You have select - " + tour2 + " - Japan Tour For " + japan_tour_cost+".00 $"
			document.getElementById("final_pop_up7").textContent = " You have select - " + tour1 + " - Sri Lanka Tour For " + sl_tour_cost+".00 $"
			document.getElementById("final_pop_up8").textContent = " YOUR TOTAL COST IS - " + total_cost + ".00 $"					
	}
	
	/*Cancel the order and clear all values and variables*/
	function cancelOrder(){
		document.getElementById('list').textContent = ""
		document.getElementById('total_bill').textContent =" 0.00 $ "
		total_cost = 0
		tour1 = 0
		tour2 = 0
		tour3 = 0
		tour4 = 0
		tour5 = 0
	}		

	function closeForm_confirm() {
		document.getElementById("confirm_form").style.display = "none";
	}
	