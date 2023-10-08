import React, { useState } from "react";
import {
  Container,
  Content,
  Form,
  InputLabel,
  SubmitButton,
} from "./styles-editDish";
import { ButtonText } from "../../components/ButtonText/ButtonText";
import IngredientsTag from "../../components/IngredientsTag/IngredientsTag";
import { Input } from "../../components/Input/Input";
import { TextArea } from "../../components/TextArea/TextArea";
import theme from "../../styles/theme";
import { stringToNumber } from "../../../utils/utils";

import { RiArrowLeftSLine } from "react-icons/ri";
import { FiUpload } from "react-icons/fi";
import { Button } from "../../components/Button/Button";

export default function EditDish() {
  // Estados para armazenar os valores dos campos do formulário
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [newIngredient, setNewIngredient] = useState("");

  function handleAddIngredient() {
    if (newIngredient.length < 3) {
      return alert(
        "Erro: Você está tentando inserir um nome de ingrediente inválido!"
      );
    } else {
      setIngredients((prevState) => [...prevState, newIngredient]);
      setNewIngredient("");
    }
  }

  function handleRemoveIngredient(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    );
  }

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode enviar os dados do prato para o servidor ou fazer o que precisar com eles
    console.log({
      image,
      name,
      category,
      ingredients,
      price: stringToNumber(price),
      description,
    });
    // Limpar os campos após o envio (opcional)
    setImage(null);
    setName("");
    setCategory("");
    setIngredients("");
    setPrice("");
    setDescription("");
  };

  const [isDeleteMode, setIsDeleteMode] = useState(false);

  // Function to toggle delete mode
  const toggleDeleteMode = () => {
    setIsDeleteMode(!isDeleteMode);
  };

  return (
    <Container>
      <Content>
        <header>
          <ButtonText title="voltar" icon={RiArrowLeftSLine} />
          <h1>Editar prato</h1>
        </header>
        <Form onSubmit={handleSubmit}>
          <InputLabel>
            <div className="dishImage">
              <p>imagem do prato</p>
              <label htmlFor="image">
                <FiUpload size={24} />
                Selecione imagem
              </label>
              <input
                type="file"
                id="image" 
                style={{ display: "none" }} 
              />
            </div>
          </InputLabel>
          <InputLabel>
            <div className="dishName"></div>
            <p>Nome do Prato</p>
            <Input
              type="text"
              placeholder="Salada Ceasar"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </InputLabel>
          <InputLabel>
            <div className="dishCategory">
              <p>Categoria</p>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="">Selecione uma categoria</option>
                <option value="refeicao">Refeição</option>
                <option value="sobremesa">Sobremesa</option>
                <option value="bebida">Bebida</option>
              </select>
            </div>
          </InputLabel>
          <div className="ingredientsTag">
            <p>Ingredientes</p>

            <IngredientsTag
              isNew
              placeholder="Adicionar"
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              onClick={handleAddIngredient}
            />
          </div>
          <InputLabel>
            <div className="price"></div>
            <p>Preço</p>
            <Input
              type="text"
              placeholder="R$ 00,00"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </InputLabel>
          <InputLabel>
            <div className="textarea">
              <p>Descrição</p>
              <TextArea
                style={{
                  backgroundColor: theme.COLORS.BACKGROUND_800,
                  color: theme.COLORS.GRAY_200,
                }}
                placeholder="A Salada César é uma opção refrescante para o verão."
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
          </InputLabel>
        </Form>
        <div className="deletebutton">
          <Button
            className="buttondelete"
            onClick={toggleDeleteMode}
            title={isDeleteMode ? "Excluindo prato" : "Excluir prato"}
          />
        </div>
        <div className="button">
          <SubmitButton type="submit">Salvar Alterações</SubmitButton>
        </div>
      </Content>
    </Container>
  );
}
