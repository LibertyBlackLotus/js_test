
/* 最长公共字条串 */
/*
function LCS( str1 ,  str2 ) {
	if(!str1 || !str2) return -1;
	let maxlen = 0, res = '';
	for(let i = 0; i < str1.length; i ++){
		if( str2.indexOf(str1.slice(i - maxlen, i + 1)) !== -1 ){
			res = str1.slice(i - maxlen, i + 1);
			maxlen += 1;
		}
	}
	return res || -1;
}

console.log( LCS("12345EF", "1AB2345CD") );*/


/* 给出一个仅包含字符'(',')','{','}','['和']',的字符串，判断给出的字符串是否是合法的括号序列
括号必须以正确的顺序关闭，"()"和"()[]{}"都是合法的括号序列，但"(]"和"([)]"不合法。*/

/*
// 法一
function isValid(s){
	const stack = [];
	for (let i = 0; i < s.length; i ++){
		const letter = s[i];
		switch(letter){
			case '(':
				stack.push(letter);
				break;
			case '[':
				stack.push(letter);
				break;
			case '{':
				stack.push(letter);
				break;
			case ')':
				if(stack.pop() != '('){
					return false;
				}
				break;
			case ']':
				if(stack.pop() != '['){
					return false;
				}
				break;
			case '}':
				if(stack.pop() != '{'){
					return false;
				}
				break;
		}
	}
	return !stack.length;
}
console.log(isValid('[[]]{}()'));*/

// 法二
/*function isValid(s){
	const stack = [];
	const map = {
		'(': ')',
		'[': ']',
		'{': '}',
	};
	for (let c of s){
		if(c === '(' || c === '[' || c === '{'){
			stack.push(c);
		}else if(c === ')' || c === ']' || c === '}'){
			const p = stack.pop();
			if(map[p] !== c){
				return false;
			}
		}
	}
	return stack.length === 0;
}*/





