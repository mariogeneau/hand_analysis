let arr_original_hand = [];

$(function() {
  $("#add").click(add);
});

const add = () => {
  const value = $("#field_add").val();
  arr_original_hand.push(value);
  analyse();
};

const analyse = () => {
  const arr = stripHand();
  const hand = returnHand(arr);
  const real_hand = arr.reduce((a, b) => a + b);
  $("#the_hand").text(`THE HAND : ${real_hand}`);
  $("#the_array").text(`THE ARRAY : ${arr}`);
  $("#field_add").val("");
};

const returnHand = (stripped_arr) => {
  let value = stripped_arr.reduce((a, b) => a + b);
  if (value > 21) {
    if (stripped_arr.filter((a) => a === 11).length !== 0) {
      const new_arr = convertElevenToOne(stripped_arr);
      returnHand(new_arr);
    }
  } 
  return value;
};

const stripHand = () => {
  let arr_hand_to_analyse = [];
  for (let i in arr_original_hand) {
    let hint = arr_original_hand[i].substring(0, 1);
    if (hint === "t") {
      arr_hand_to_analyse.push(10);
    } else if (hint === "e") {
      arr_hand_to_analyse.push(11);
    } else {
      let value = Number(arr_original_hand[i].substring(0, arr_original_hand[i].length - 1));
      arr_hand_to_analyse.push(value);
    }
  }
  return arr_hand_to_analyse;
};

const convertElevenToOne = (arr_for_conversion) => {
  for (let i in arr_for_conversion) {
    if (arr_for_conversion[i] === 11) {
      arr_for_conversion.splice(i, 1, 1);
      return arr_for_conversion;
    }
  }
};













