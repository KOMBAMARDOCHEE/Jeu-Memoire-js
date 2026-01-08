#game {
  display: grid;
  grid-template-columns: repeat(4, 80px);
  gap: 10px;
  justify-content: center;
}

.card {
  width: 80px;
  height: 80px;
  background: #444;
  color: white;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}