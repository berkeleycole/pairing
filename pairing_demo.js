// PAIRING DEMO

// TODO: As it is right now, this program can only handle even numbers in the names array, it would be good to find a graceful procedure for dealing with this. I think that altering the last if statement to include arrays with three items, then assigning a last team of three to handle the extra person would be best.

// list all names to be paired:
// var names = "a, b, c, d, e, f, g, h, j, l, z, i, v, x".split(", ");
// var names = "a".split(",")
// var names = "a, b, c".split(",")

// random number generator
function rand(max) {
	return Math.floor(Math.random() * (Math.floor(max) - 0)) + 0;
}

// pickPair takes an array of people and returns an array of two people
function pickPair(people) {
	var pair = []

	pair.push(people.splice(rand(people.length), 1)[0])
	pair.push(people.splice(rand(people.length), 1)[0])

	return pair
}

// pairPeople takes an array of people and returns a multidemensional array of pairs of people.
function pairPeople(people) {
	var pairs = []

	if(people.length == 1) {
		pairs.push([people[0]])
		return pairs
	}

	while(people.length >= 2) {
		pairs.push(pickPair(people))
	}

	if(people.length == 1) {
		pairs[pairs.length].push(people[0])
	}

	return pairs
}

pairs = pairPeople(names)

console.log(pairs);
