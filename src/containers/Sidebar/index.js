import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getAllCompanies } from "../../actions/companiesActions";
import { getAllTags } from "../../actions/tagsActions";
import SpinnerIcon from "../../components/Icons/Spinner";
import ScrollableContent from "../../components/ScrollableContent";
import SidebarBox from "../../components/SidebarBox";
import Checkbox from "../../components/UI/Checkbox";
import Radio from "../../components/UI/Radio";
import theme from "../../styles/theme";

const SORTING = [
  { id: 1, value: "Price low to high" },
  { id: 2, value: "Price high to low" },
  { id: 3, value: "New to old" },
  { id: 4, value: "Old to new" },
];

const SidebarWrapper = styled.aside`
  margin-right: 16px;
  max-width: 100%;
  width: 296px;
  flex-shrink: 0;
  position: sticky;
  top: 116px;
`;

function Sidebar() {
  const { loading: loadingCompanies, items: companies } = useSelector(
    (state) => state.companiesList
  );
  const { loading: loadingTags, items: tags } = useSelector(
    (state) => state.tagsList
  );
  console.log(tags);
  console.log(companies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCompanies());
    dispatch(getAllTags());
  }, [dispatch]);

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <SidebarWrapper>
      <SidebarBox title="Sorting">
        {SORTING?.map((sort) => (
          <Radio
            key={sort.id}
            name="sorting"
            labelText={sort.value}
            value={sort.id}
            handleRadioChange={handleChange}
            isDisabled={false}
          />
        ))}
      </SidebarBox>
      <SidebarBox title="Brands">
        <ScrollableContent>
          {loadingCompanies ? (
            <SpinnerIcon width={64} height={64} fill={theme.colors.mainColor} />
          ) : (
            companies.map((company) => (
              <Checkbox
                key={company.slug}
                labelText={company.name}
                value={company.slug}
                handleCheckboxChange={handleChange}
                isDisabled={false}
              />
            ))
          )}
        </ScrollableContent>
      </SidebarBox>
      <SidebarBox title="Tags">
        <ScrollableContent>
          {loadingTags ? (
            <SpinnerIcon width={64} height={64} fill={theme.colors.mainColor} />
          ) : (
            tags.map((tag) => (
              <Checkbox
                key={tag}
                labelText={tag}
                value={tag}
                handleCheckboxChange={handleChange}
                isDisabled={false}
              />
            ))
          )}
        </ScrollableContent>
      </SidebarBox>
    </SidebarWrapper>
  );
}

export default Sidebar;
