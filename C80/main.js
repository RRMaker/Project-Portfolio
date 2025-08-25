name_of_the_student_array=[];
function submit(){
    var display_student_array=[];

    for(var j=1; j<=4; j++){
        var name_of_student=document.getElementById("name_of_the_student_"+j).value;
        console.log(name_of_student);
        name_of_the_student_array.push(name_of_student);
    }
    console.log(name_of_the_student_array);

    var length_of_name_of_student_array=name_of_the_student_array.length;
    console.log(length_of_name_of_student_array);

    for(var g=0; g<length_of_name_of_student_array; g++){
        display_student_array.push("<h4>Name- "+name_of_the_student_array[g]+"</h4>");
        console.log(display_student_array);
    }
    console.log(display_student_array);
    document.getElementById("display_name_with_commas").innerHTML=display_student_array;

    var remove_comma=display_student_array.join(" ");
    console.log(remove_comma);
    document.getElementById("display_name_without_commas").innerHTML=remove_comma;

    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);

    var display_student_array_sort=[];

    var length_of_name_of_student_array=name_of_the_student_array.length;
    console.log(length_of_name_of_student_array);

    for(var i=0; i<length_of_name_of_student_array; i++){
        display_student_array_sort.push("<h4>Name- "+name_of_the_student_array[i]+"</h4>");
        console.log(display_student_array_sort);
    }
    var remove_comma=display_student_array_sort.join(" ");
    console.log(remove_comma);
    document.getElementById("display_name_without_commas").innerHTML=remove_comma;
}