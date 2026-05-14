function studentScore(score){
if (score >= 70)
return "A"
if (score < 70 && score >= 60 )
return "B"
if (score < 60 && score >= 50 )
return "C"
if (score < 50 && score >= 40 )
return "D"
if (score < 40 )
return "F"
}

console.log(studentScore(41))